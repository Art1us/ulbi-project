import {
    MouseEvent,
    ReactElement,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Portal } from "../Portal/Portal"
import cls from "./Modal.module.scss"

interface ModalProps {
    children: ReactNode
    className?: string
    isOpen: boolean
    onClose: () => void
}

const ANIMATION_DELAY = 300

export function Modal(props: ModalProps): ReactElement {
    const { className, children, isOpen, onClose } = props

    const [isClosing, setIsClosing] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    function onContentClick(e: MouseEvent) {
        e.stopPropagation()
    }

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeHandler()
            }
        },
        [closeHandler]
    )

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown)
        }

        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
