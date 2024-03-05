import './button.styles.scss';

const buttonTypeClasses = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const ButtonComponent = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`button-container ${buttonTypeClasses[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    );
}

export default ButtonComponent;