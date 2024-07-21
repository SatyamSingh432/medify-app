import './HospitalCard.css';
import { FaRegThumbsUp } from 'react-icons/fa';
import img from '../Img/hospitalcard/hosicon.png';
const HospitalCard = ({ name, city, state, rating, type }) => {
    return (
        <div className='card-cont'>
            <div className='card-img-cont'>
                <img src={img} alt='' />
            </div>
            <div className='card-content-cont'>
                <div className='hos-name'>{name}</div>
                <div className='hos-state'>
                    {city}, {state}
                </div>
                <div className='hos-offer'>{type}</div>
                <div className='hos-service'>Consultation fee at clinic</div>
                <hr style={{ borderTop: '1px dotted red' }} />
                <div className='hos-rating'>
                    <FaRegThumbsUp />
                    {rating}
                </div>
            </div>
            <div card-btn-cont>
                <div style={{ color: 'rgba(1, 164, 0, 1)', fontWeight: '500' }}>
                    Available Today
                </div>
                <button
                    type='button'
                    className='hos-card-btn'
                    style={{
                        backgroundColor: 'rgba(42, 168, 255, 1)',
                        border: 'none',
                    }}
                >
                    Book FREE Center Visit
                </button>
            </div>
        </div>
    );
};
export default HospitalCard;
