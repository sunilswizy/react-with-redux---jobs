

interface CardProps {
    children: React.ReactNode,
    bgClass: string
}

const Cards: React.FC<CardProps> = ({ children, bgClass }) => {
    return (
        <div className={`${bgClass} p-6 rounded-lg shadow-md`}>
            { children }
        </div>
    );
}

export default Cards;