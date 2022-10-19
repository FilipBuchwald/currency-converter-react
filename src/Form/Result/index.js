import { StyledResult } from "./styled";


export const Result = ({ result }) => (
    <StyledResult>
        {result !== undefined && (
            <>
                <span>
                    Po przewalutowaniu otrzymasz :
                </span>
                <strong>
                    &nbsp;{result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </StyledResult>
);