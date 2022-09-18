

export const Result = ({ result }) => (
    <p>
        {result !== undefined && (
            <>
                <strong>
                    {result.targetAmount} test
                </strong>
            </>
        )}
    </p>
);