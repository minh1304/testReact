import { useContext} from 'react'
import {ThemeContext} from './ThemeContext'
function Paragraph() {
    const context = useContext(ThemeContext)
    return (
        <p className={context.theme}>
            Der Text enthielt keine Rechtschreibfehler. The text contained no spelling mistakes. Der Text ist unscharf ohne meine Brille. The text is blurred without my glasses.
        </p>
    )
}
export default Paragraph