// JS imports
import { ReactNode, ReactNodeArray } from 'react';

// Properties
// Error
declare type ErrorType = {
  title?: string;
  message: string;
};

// Shared props
declare interface CommonProps {
  children?: ReactNode | ReactNodeArray[];
  error?: ErrorType;
}

//export { ErrorType, CommonProps };
