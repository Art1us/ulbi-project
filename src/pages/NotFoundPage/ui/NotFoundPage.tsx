import { ReactElement } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./NotFoundPage.module.scss"

interface NotFoundPageProps {
    className?: string
}

export function NotFoundPage({ className }: NotFoundPageProps): ReactElement {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t("Page Not Found")}
        </div>
    )
}