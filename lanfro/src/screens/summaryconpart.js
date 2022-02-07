import './total.css'
function Summarypart(props) {
  return (
    <div>
      <div class="row sumtb">
        <div class="col-lg-4">
          
          <b>{props.producname}</b>
        </div>
        <div class="col-lg-4">
          {(props.clicker.wash ? "Washing" : "") +
            " " +
            (props.clicker.iron ? "Ironing" : "") +
            " " +
            (props.clicker.fold ? "Folding" : "") +
            " " +
            (props.clicker.pack ? "Chemical Wash" : "")}
        </div>
        <div class="col-lg-4 sumcoss">{props.cost}</div>
      </div>
    </div>
  );
}

export default Summarypart;