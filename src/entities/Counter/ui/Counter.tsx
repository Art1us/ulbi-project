import { ReactElement } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "shared/ui/Button/Button"
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue"
import { counterActions } from "../model/slice/counterSlice"

export function Counter(): ReactElement {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)

    function increment() {
        dispatch(counterActions.increment())
    }

    function decrement() {
        dispatch(counterActions.decrement())
    }

    const { t } = useTranslation()

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={increment} data-testid="incr-btn">
                {t("increment")}
            </Button>
            <Button onClick={decrement} data-testid="decr-btn">
                {t("decrement")}
            </Button>
        </div>
    )
}
