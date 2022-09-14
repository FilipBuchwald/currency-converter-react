

export const Result = ({ result }) => (
    <p>
        {result !== undefined && (
            <>
                <strong>
                    {result.targetAmonut} test
                </strong>
            </>
        )}
    </p>
);