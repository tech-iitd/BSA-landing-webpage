import './RecentHighlights.css';

function RecentHighlights({date, won, lost, result}) {
    return (
        <div className="highlightBox">
        <div className='highlightInfo'>

            <div className='hightlightHeading'>Result</div>
            
            <div className='highlightDetail'>{date}</div>

            <div className='team-rows'>
                <div className='team'>
                    <div>{won}</div>
                    <div>Runs/Wickets</div>
                </div>

                <div className='team lost'>
                    <div>{lost}</div>
                    <div>Runs/Wickets</div>
                </div>
            </div>

            <div className='result'>
                <div>{result}</div>
                <a>Match Photos</a>
            </div>


        </div>

        <div className='highlightImage'>
            <img src="" alt='img'/>
        </div>

    </div>

    )
}

export default RecentHighlights;