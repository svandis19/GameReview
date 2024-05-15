import { useState } from "react";

export type GameReviewProps = {
    name: string;
    desc: string;
    review: number;
}


const GameReview = ({ name, desc, review, }: GameReviewProps) => {
    return (
        <>
            <div> Name: {name} </div>
            <div> Desc: {desc} </div>
            <div>review: {review} </div>
        </>
    );
};

export default () => {
    const [review, setReview] = useState<GameReviewProps>({
        name: '',
        desc: '',
        review: 0
    })
    const [showReview, setShowReview] = useState(false);

    return (
        <>
            <GameReview name={review.name} desc={review.desc} review={'' || review.review} />


            <div>

                <button
                    style={{ border: "1px solid #eee" }}
                    onClick={() => setShowReview(true)}
                >
                    New review
                </button>

            </div>

            {showReview ? (
                <>
                    <div>
                        Name: <input style={{ border: "1px solid #eee" }}
                            onChange={(e) => setReview({ ...review, name: e.target.value })}></input>
                    </div>
                    <div>
                        Desc: <input style={{ border: "1px solid #eee" }}
                            onChange={(e) => setReview({ ...review, desc: e.target.value })}></input>
                    </div>
                    <div>
                        Score: <input style={{ border: "1px solid #eee" }}
                            onChange={(e) => setReview({ ...review, review: (parseInt(e.target.value)) })}></input>
                    </div>
                </>


            ) : null
            }
            <button
                style={{ border: "1px solid #eee" }}
                onClick={() => setShowReview(false)}
            >
                Submit
            </button>
        </>
    )
};



