const toggleThemeApp = () => {

    const themeToggleButton = document.querySelector('.theme-toggle-button')
    
    // add remove

    const toggleTheme = () => {
        
        document.body.classList.toggle('dark')
        
        themeToggleButton.classList.add('theme-toggle-button--clicked')
        
        setTimeout(() => {
            themeToggleButton.classList.remove('theme-toggle-button--clicked')}, 1000)
            
    }
    
    themeToggleButton.addEventListener('click', toggleTheme)
    
}

toggleThemeApp()