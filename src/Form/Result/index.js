

export const Result = ({ result }) => (
    <p>
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
    </p>
);