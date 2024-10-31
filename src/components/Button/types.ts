export interface IButtonProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | null;
    children?: React.ReactNode;
    disabled: boolean;
}
