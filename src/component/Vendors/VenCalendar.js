import React from 'react'


import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import VenFooter from './VenFooter'
import VenHeader from './VenHeader'
const VenCalendar = () => {

    const events = [
        { title: 'Meeting', start: new Date() }
      ]

      function renderEventContent(eventInfo) {
        return (
          <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
          </>
        )
      }
    return (
        <div>
            <div>
                <div id='dashboad'>

                    <body className="body-padding body-p-top light-theme">

                        <VenHeader />
                        {/* <!-- main content start --> */}
                        <div className="main-content">
                            <div className="row">
                                <div className="col-xxl-9 col-lg-8">
                                <div class="panel">
                                    <div class="panel-body">
                                    <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={false}
        events={events}
        eventContent={renderEventContent}
      />
                                    </div>
                                </div>
                                </div>
                                <div className="col-xxl-3 col-lg-4 calendar-sidebar">
                                    <div className="panel mb-30">
                                        <div className="panel-header">
                                            <h5>Reserved Event</h5>
                                        </div>
                                        <div className="panel-body">
                                            <div id="external-events" className="sidebar-event-list">
                                                <div className="fc-event">My Event 1</div>
                                                <div className="fc-event">My Event 2</div>
                                                <div className="fc-event">My Event 3</div>
                                                <div className="fc-event">My Event 4</div>
                                                <div className="fc-event">My Event 5</div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="drop-remove" />
                                                    <label for="drop-remove" className="form-check-label">Remove after drop</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel">
                                        <div className="panel-header">
                                            <h5>Upcoming Events</h5>
                                        </div>
                                        <div className="panel-body">
                                            <div className="upcoming-event-list sidebar-event-list"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- footer start --> */}
                           <VenFooter/>
                            {/* <!-- footer end --> */}
                        </div>
                        {/* <!-- main content end --> */}

                        {/* <!-- event modal start --> */}
                        <div className="modal fade" id="event-modal" tabindex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <form className="needs-validation" name="event-form" id="form-event" novalidate>
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="modal-title">Event</h5>
                                            <button type="button" className="btn btn-sm btn-icon btn-outline-primary" data-bs-dismiss="modal" aria-label="Close"><i className="fa-light fa-xmark"></i></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <div>
                                                        <label className="control-label form-label">Event Name</label>
                                                        <input className="form-control" placeholder="Insert Event Name" type="text" name="title" id="event-title" required />
                                                        <div className="invalid-feedback">Please provide a valid event name</div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="mb-3">
                                                        <label className="control-label form-label">Category</label>
                                                        <select className="form-control" name="category" id="event-category" required>
                                                            <option value="">Select a category</option>
                                                            <option value="bg-primary">Primary</option>
                                                            <option value="bg-danger">Danger</option>
                                                            <option value="bg-success">Success</option>
                                                            <option value="bg-info">Info</option>
                                                            <option value="bg-dark">Dark</option>
                                                            <option value="bg-warning">Warning</option>
                                                        </select>
                                                        <div className="invalid-feedback">Please select a valid event category</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <button type="button" className="btn btn-sm btn-danger" id="btn-delete-event">Delete</button>
                                                </div>
                                                <div className="col-6 text-end">
                                                    <button type="button" className="btn btn-sm btn-light me-1" data-bs-dismiss="modal">Close</button>
                                                    <button type="submit" className="btn btn-sm btn-success" id="btn-save-event">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!-- event modal end --> */}


                    </body>
                </div>
            </div>
        </div>
    )
}

export default VenCalendar
