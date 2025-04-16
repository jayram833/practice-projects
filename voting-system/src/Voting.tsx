import reactjs from "./assets/reactjs.png";
import angularjs from "./assets/angularjs.png";
import vuejs from "./assets/vuejs.png";
import { useState } from "react";

const imgArr: string[] = [reactjs, angularjs, vuejs];

const imgToKeyMap: Record<string, "react" | "angular" | "vue"> = {
    [reactjs]: "react",
    [angularjs]: "angular",
    [vuejs]: "vue",
};

function Voting() {
    const [votes, setVotes] = useState({
        react: 0,
        angular: 0,
        vue: 0,
    });

    const [voted, setVoted] = useState(false);

    function handleVote(candidateImg: string) {
        const key = imgToKeyMap[candidateImg];
        setVotes((prevVotes) => ({
            ...prevVotes,
            [key]: prevVotes[key] + 1,
        }));
        setVoted(true);
    }

    return (
        <div className="flex flex-col items-center gap-5 mt-10">
            <h1 className="text-2xl font-bold">Vote for Your Favorite Framework</h1>
            <div className="flex gap-4">
                {imgArr.map((i) => (
                    <Card i={i} key={i} onVote={handleVote} />
                ))}
            </div>

            {voted && <PostVotingWindow votes={votes} />}
        </div>
    );
}

function Card({
    i,
    onVote,
}: {
    i: string;
    onVote: (img: string) => void;
}) {
    return (
        <div className="border-gray-300 border-[0.5px] rounded-xl p-4 flex flex-col justify-center items-center gap-4 shadow-md">
            <img src={i} alt="icon" className="w-[150px]" />
            <button
                onClick={() => onVote(i)}
                className="bg-green-600 px-3 py-1 cursor-pointer text-white rounded-md hover:bg-green-700 transition"
            >
                Vote
            </button>
        </div>
    );
}

function PostVotingWindow({ votes }: { votes: { react: number; angular: number; vue: number } }) {
    return (
        <div className="mt-8 bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-semibold mb-4">Voting Results</h2>
            <p>React: {votes.react}</p>
            <p>Angular: {votes.angular}</p>
            <p>Vue: {votes.vue}</p>
        </div>
    );
}

export default Voting;
