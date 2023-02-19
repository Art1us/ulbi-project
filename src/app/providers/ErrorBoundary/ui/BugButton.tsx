import { ReactElement, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button/Button"

/* Component for testing */
export function BugButton(): ReactElement {
    const { t } = useTranslation()
    const [error, setError] = useState(false)

    function onThrow() {
        setError(true)
    }

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return <Button onClick={onThrow}>{t("Throw Error")}</Button>
}
