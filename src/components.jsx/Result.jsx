function Result({ getWrongLetters, getRightLetters, reset, word }) {

    return (
        <div>
            <div>{getWrongLetters().length >= 5 ?
                <div>
                    <span>Lost</span>
                    <button onClick={() => reset()}>Reset</button>
                </div>
                : ''}
            </div>
            <div>{getRightLetters().join('') === word ?
                <div>
                    <span>Won</span>
                    <button onClick={() => reset()}>Reset</button>
                </div>
                : ''}
            </div>
        </div>
    )
}
export default Result