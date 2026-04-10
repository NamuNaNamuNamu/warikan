class ScreenNavigator {
    navigateTo(screen) {
        document.querySelectorAll(".screen").forEach(element => {
            element.classList.remove("is-active");
        });

        screen.classList.add("is-active");
    }
}

export const screenNavigator = new ScreenNavigator();