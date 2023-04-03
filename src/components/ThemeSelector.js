import './ThemeSelector.css';

import { useTheme } from '../hook/useTheme'

const themecolors = [ '#004080', '#249c6b', '#b70233']

export default function ThemeSelector() {
    const { changeColor} = useTheme();

  return (
    <div className='theme-selector'>
        <div className="theme-buttons">
            {themecolors.map(color => (
                <div 
                    key={color}
                    onClick={() => changeColor(color)}
                    style={{background: color}}
                />
            ))}
        </div>
    </div>
  )
}
