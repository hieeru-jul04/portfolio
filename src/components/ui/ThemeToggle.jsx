import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Light mode' : 'Dark mode'}
            className="nav-item"
            style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    )
}

export default ThemeToggle
