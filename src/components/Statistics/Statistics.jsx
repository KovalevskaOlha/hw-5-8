export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
   return(
   <div className="statistics-box">
      <p className="statistics-text">Good: {good}</p>
      <p className="statistics-text">Neutral: {neutral}</p>
      <p className="statistics-text">Bad: {bad}</p>
      <p className="statistics-text">Total: {total}</p>
      <p className="statistics-text">Positive feedback: {positivePercentage}%</p>
    </div>
    ) 
}