import { ReactElement } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { Button } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"
import cls from "./LoginForm.module.scss"

interface LoginFormProps {
    className?: string
}

export function LoginForm({ className }: LoginFormProps): ReactElement {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                placeholder={t("Enter username")}
                type="text"
                autoFocus
                className={cls.input}
            />
            <Input
                placeholder={t("Enter password")}
                type="text"
                className={cls.input}
            />
            <Button className={cls.loginBtn}>{t("Войти")}</Button>
        </div>
    )
}
