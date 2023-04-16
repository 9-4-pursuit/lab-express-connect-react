export default function LogNewForm() {
  return(<div className="logNewForm">
    <h1>New</h1>
    <form>
      <label htmlFor="captain">Captain's Name:</label>
      <input type="text" id="captain"/>

      <label htmlFor="title">Title:</label>
      <input type="text" id="title"/>

      <label htmlFor="post">Post:</label>
      <input type="text" placeholder="What happened today?" id="post"/>

      <label htmlFor="lastCrisis">Days Since Last Crisis:</label>
      <input type="number" placeholder="0" id="lastCrisis"/>

      <label htmlFor="mistakesMade">Mistakes were made today:</label>
      <input type="checkbox" id="mistakesMade"/>

      <button>Submit</button>
    </form>
  </div>);
}