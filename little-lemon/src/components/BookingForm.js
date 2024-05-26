import React, { useState } from 'react';

const BookingForm = () => {
    const [date, setDate] = useState('');
    const [times, setTimes] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return(
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        {/* reservation date */}
                        <div>
                            <label htmlFor='book-date'>
                                Choose A Date
                            </label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required />
                        </div>

                        {/* reservation time */}
                        <div>
                            <label htmlFor='book-time'>
                                Choose A Time:
                            </label>
                            <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value=''>
                                    Select A Time
                                </option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>

                        {/* number of guests */}
                        <div>
                            <label htmlFor='book-guests'>
                                Number of Guests:
                            </label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)}/>
                        </div>

                        {/* occasion type */}
                        <div>
                            <label htmlFor='book-occasion'>
                                Occasion:
                            </label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>
                                    Birthday
                                </option>
                                <option>
                                    Anniversary
                                </option>
                                <option>
                                    Graduation
                                </option>
                                <option>
                                    Proposal
                                </option>
                                <option>
                                    Date Night
                                </option>
                                <option>
                                    Family Gathering
                                </option>
                            </select>
                        </div>
                        {/* submit button */}
                        <div className='btnReceive'>
                            <input aria-label='On Click' type='submit' value={'Make Your Reservation'} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;