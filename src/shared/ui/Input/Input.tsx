import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    ReactElement,
    useEffect,
    useRef,
    useState,
} from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Input.module.scss"

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
>

interface InputProps extends HTMLInputProps {
    className?: string
    placeholder?: string
    value?: string
    autoFocus?: boolean
    onChange?: (value: string) => void
}

export const Input = memo((props: InputProps): ReactElement => {
    const {
        className,
        value,
        onChange,
        placeholder,
        autoFocus,
        type = "text",
        ...otherProps
    } = props

    const [isFocused, setIsFocused] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)

    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true)
            ref.current?.focus()
        }
    }, [autoFocus])

    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        onChange?.(e.target.value)
        setCaretPosition(e.target.value.length)
    }

    function onBlur() {
        setIsFocused(false)
    }

    function onFocus() {
        setIsFocused(true)
    }

    function onSelect(e: any) {
        setCaretPosition(e?.target?.selectionStart || 0)
    }

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={cls.carretWrapper}>
                <input
                    type={type}
                    value={value}
                    ref={ref}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    )
})
