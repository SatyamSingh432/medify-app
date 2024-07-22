import { useState } from 'react';
import './HospitalCard.css';
import { FaRegThumbsUp } from 'react-icons/fa';
import img from '../Img/hospitalcard/hosicon.png';
import BookingPanel from './BookingPanel';
import BookingModal from '../BookingModal/BookingModal';

const availableSlots = {
    morning: ['11:30 AM'],
    afternoon: ['12:00 PM', '12:30 PM', '01:30 PM', '02:00 PM', '02:30 PM'],
    evening: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM'],
};
const HospitalCard = ({ name, city, state, rating, type, details }) => {
    const [isBookingPanelOpen, setIsBookingPanelOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({});

    const toggleBookingPanel = () => {
        setIsBookingPanelOpen(!isBookingPanelOpen);
    };

    const makeBooking = () => {
        setBookingDetails(details);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className='card-container'>
                <div className='card-booking'>
                    <div className='card-img-cont'>
                        <img src={img} alt='' />
                    </div>
                    <div className='card-content-cont'>
                        <div className='hos-name'>{name}</div>
                        <div className='hos-state'>
                            {city}, {state}
                        </div>
                        <div className='hos-offer'>{type}</div>
                        <div className='hos-service'>
                            Consultation fee at clinic
                        </div>
                        <hr style={{ borderTop: '1px dotted red' }} />
                        <div className='hos-rating'>
                            <FaRegThumbsUp />
                            {rating}
                        </div>
                    </div>
                    <div card-btn-cont>
                        <div
                            style={{
                                color: 'rgba(1, 164, 0, 1)',
                                fontWeight: '500',
                            }}
                        >
                            Available Today
                        </div>
                        <button
                            onClick={() => {
                                toggleBookingPanel();
                            }}
                            type='button'
                            className='hos-card-btn'
                            style={{
                                backgroundColor: 'rgba(42, 168, 255, 1)',
                                border: 'none',
                            }}
                        >
                            {isBookingPanelOpen
                                ? 'Hide Booking Calendar'
                                : 'Book FREE Center Visit'}
                        </button>
                    </div>
                </div>
                {isBookingPanelOpen && (
                    <BookingPanel
                        details={details}
                        availableSlots={availableSlots}
                        makeBooking={makeBooking}
                    />
                )}

                <BookingModal
                    open={isModalOpen}
                    setOpen={setIsModalOpen}
                    bookingDetails={bookingDetails}
                />
            </div>
        </>
    );
};
export default HospitalCard;
