export const TextLimit = ({ text, limit }: { text: string | undefined, limit: number }) => {
    const truncatedText = text && text.length > limit ? `${text.substring(0, limit)}...` : text;
    
    return (
        <p dangerouslySetInnerHTML={{ __html: truncatedText || '' }}></p>
    );
}