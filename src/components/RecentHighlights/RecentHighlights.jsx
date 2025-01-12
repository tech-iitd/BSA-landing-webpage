import './RecentHighlights.css';

function RecentHighlights() {
  return (
    <div className='highlightBoxContainer'>
        <HighlightBox />
        <HighlightBox />
        <HighlightBox />
        <HighlightBox />
    </div>
  );
}

export default RecentHighlights;


function HighlightBox(){
    return (
        <div className="highlightBox">
        <div className='highlightInfo'>

            <div className='hightlightHeading'>Result</div>
            
            <div className='highlightDetail'>1st Match, Month DD, YYYY</div>

            <div className='team-rows'>
                <div className='team'>
                    <div>Nil Bulls</div>
                    <div>Runs/Wickets</div>
                </div>

                <div className='team lost'>
                    <div>Satpura Samurais</div>
                    <div>Runs/Wickets</div>
                </div>
            </div>

            <div className='result'>
                <div>Nil Bulls won by 6 runs</div>
                <a>Match Photos</a>
            </div>


        </div>

        <div className='highlightImage'>
            <img src="" alt='img'/>
        </div>

    </div>

    )
}