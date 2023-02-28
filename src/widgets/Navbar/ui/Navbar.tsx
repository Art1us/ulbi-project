import { useCallback, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Modal } from "shared/ui/Modal/Modal"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import cls from "./Navbar.module.scss"

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: NavbarProps) {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const { t } = useTranslation()

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t("Войти")}
            </Button>
            {/*  eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                aacaosjcnakka akj akb aa bsajl j bds balk alj bai anl asnaksbjn
            </Modal>
        </div>
    )
}
