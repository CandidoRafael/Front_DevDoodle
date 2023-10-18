export const TextLimit = ({ text, limit }: { text: string | undefined, limit: number }) => {
    

    return (
        <p>{text && (
            text?.length > limit ? `${text?.substring(0, limit)}...` : text
        )}</p>
    );
  }