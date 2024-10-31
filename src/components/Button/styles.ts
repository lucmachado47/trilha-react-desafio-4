import styled from 'styled-components';
import { IButtonProps } from './types';


export const ButtonContainer = styled.button<Omit<IButtonProps, 'title'>>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
    
    &:disabled {
        background-color: #ccc;
        border: 1px solid #ccc;
        cursor: not-allowed;
        opacity: 0.5;
    }
`