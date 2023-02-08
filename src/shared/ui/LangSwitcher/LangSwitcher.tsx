import { ReactElement } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ThemeButton } from "../Button/Button"
import cls from "./LangSwitcher.module.scss"

interface LangSwitcherProps {
    className?: string
}

export function LangSwitcher({ className }: LangSwitcherProps): ReactElement {
    const { t, i18n } = useTranslation()

    async function onToggle() {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={onToggle}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            {t("Язык")}
        </Button>
    )
}
