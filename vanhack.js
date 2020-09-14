/*
    DISCLAIMER:
    I'm not the author nor owner of the icons and images used on this Code Test.
    Every image here is used by their own URL, linking to the original source.
    The SVG code for the icons was taken from the free-to-use icons website mentioned below.
    The purpose of using these images and svg icons is only for visual aesthetic.
*/

const events = [
    {
        id: 'VH001',
        title: 'Toronto MeetUp',
        type: 'MeetUp',
        imgUrl: 'https://i.pinimg.com/originals/1b/06/72/1b06721be7fd03e8c8174318ef615ba4.jpg',
        eventDates: 'August 30th',
        applicationDate: '07/31/2020',
        location: 'Toronto, Canada'
    },
       {
        id: 'VH002',
        title: 'Vancouver VanHackathon',
        type: 'VanHackathon',
        imgUrl: 'https://res.cloudinary.com/simpleview/image/upload/v1486505969/clients/vancouverbc/Aerial_Sunset_Vancouver_d3_copy_1bb86ed0-1edc-4cda-841d-0b033ca0bb72.jpg',
        eventDates: 'August 1st & August 2nd',
        applicationDate: '07/31/2020',
        location: 'Vancouver, Canada'
    },
    {
        id: 'VH003',
        title: 'Edmonton Open Webinar',
        type: 'Open Webinar',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Edmonton_cityscape.jpg/1200px-Edmonton_cityscape.jpg',
        eventDates: 'September 1st - September 5th',
        applicationDate: '08/31/2020',
        location: 'Edmonton, Canada'
    },
    {
        id: 'VH004',
        title: 'New York Recruiting Mission',
        type: 'Mission',
        imgUrl: 'https://www.itravelkosher.com/wp-content/uploads/2014/11/new-york.jpg',
        eventDates: 'October 15th',
        applicationDate: '09/30/2020',
        location: 'New York, USA'
    },
    {
        id: 'VH005',
        title: 'Montréal Leap',
        type: 'Leap',
        imgUrl: 'https://live.staticflickr.com/3225/2990705738_07c4e6d0fb_b.jpg',
        eventDates: 'August 7th',
        applicationDate: '07/31/2020',
        location: 'Montréal, Canada'
    },
    {
        id: 'VH006',
        title: 'Vancouver Premium-only Webinar',
        type: 'Premium-only Webinar',
        imgUrl: 'https://res.cloudinary.com/simpleview/image/upload/v1486505969/clients/vancouverbc/Aerial_Sunset_Vancouver_d3_copy_1bb86ed0-1edc-4cda-841d-0b033ca0bb72.jpg',
        eventDates: 'August 1st & August 2nd',
        applicationDate: '07/31/2020',
        location: 'Vancouver, Canada'
    },
    {
        id: 'VH007',
        title: 'Whistler MeetUp',
        type: 'MeetUp',
        imgUrl: 'https://drifttravel.com/wp-content/uploads/2018/11/Whistler-village-winter-Credit_-Mike-Crane_Tourism-Whistler-e1541457546434.jpg',
        eventDates: 'August 21st - August 25th',
        applicationDate: '07/31/2020',
        location: 'Whistler, Canada'
    },
    {
        id: 'VH008',
        title: 'Seattle Open Webinar',
        type: 'Open Webinar',
        imgUrl: 'https://negociosyconvenciones.com/wp-content/uploads/2019/10/seattle-home.jpg',
        eventDates: 'September 1st - September 5th',
        applicationDate: '08/31/2020',
        location: 'Seattle, USA'
    },
    {
        id: 'VH009',
        title: 'D.C. Premium-only Webinar',
        type: 'Premium-only Webinar',
        imgUrl: 'https://s3.amazonaws.com/storage.citizensforethics.org/wp-content/uploads/2015/12/06205030/flowers.jpg',
        eventDates: 'November 1st & November 2nd',
        applicationDate: '10/31/2020',
        location: 'Washington D.C., USA'
    },
    {
        id: 'VH010',
        title: 'Montréal Premium-only Webinar',
        type: 'Premium-only Webinar',
        imgUrl: 'https://live.staticflickr.com/3225/2990705738_07c4e6d0fb_b.jpg',
        eventDates: 'September 1st & September 2nd',
        applicationDate: '08/31/2020',
        location: 'Montréal, Canada'
    },
       {
        id: 'VH011',
        title: 'Chicago Open Webinar',
        type: 'Open Webinar',
        imgUrl: 'https://lh3.googleusercontent.com/proxy/hvPF3cYMDRO9Nol1DSuqtlyKAFd5M6C99EehbRDtgF9Ei8nxKTXZfpZRQztepL76VgCGJ60elh1Pf2rFAK_2BF62IZRikcVwYDtl0Yb-eBeDSKCHlN2xeibVNJ3ihvihvV7yy8ZfgBPScZNGJ_vkVUX2aZ-l7D8gcNCpsA',
        eventDates: 'September 21st - September 25th',
        applicationDate: '08/31/2020',
        location: 'Chicago, USA'
    },
    {
        id: 'VH012',
        title: 'Ottawa Leap',
        type: 'Leap',
        imgUrl: 'https://3.bp.blogspot.com/-2rmpQhNY3KY/XAgJYWpbCTI/AAAAAAAACAo/umx7-Je9exoEi60BHwS-v6QdXsvQ_n5GACHMYCw/s1600/ten-must-see-places-in-canada-work-and-travel.jpg',
        eventDates: 'October 7th',
        applicationDate: '09/30/2020',
        location: 'Ottawa, Canada'
    },
    {
        id: 'VH013',
        title: 'Quebec City VanHackathon',
        type: 'VanHackathon',
        imgUrl: 'https://wallpaperaccess.com/full/1264276.jpg',
        eventDates: 'December 1st & December 2nd',
        applicationDate: '10/30/2020',
        location: 'Quebec City, Canada'
    },
    {
        id: 'VH014',
        title: 'Mexico City Recruiting Mission',
        type: 'Mission',
        imgUrl: 'https://wallpaperaccess.com/full/1352983.jpg',
        eventDates: 'November 21st - November 25th',
        applicationDate: '10/31/2020',
        location: 'Mexico City, Mexico'
    },
    {
        id: 'VH015',
        title: 'L.A. MeetUp',
        type: 'MeetUp',
        imgUrl: 'https://images6.alphacoders.com/395/395413.jpg',
        eventDates: 'October 1st - October 5th',
        applicationDate: '09/30/2020',
        location: 'L.A., USA'
    },
];

const standOutEventTypes = ['Leap', 'Mission', 'VanHackathon'];

const appliedEvents = [];

const genericDescription = `
Sed vestibulum nibh velit, ut euismod mi tristique ut. Duis non mi condimentum, suscipit magna eget, facilisis velit. Phasellus sit amet arcu quis velit consectetur convallis eget a turpis. Quisque ultricies eros eget mollis porttitor. Aenean at mi ac nisl molestie ultrices ac et velit. Aliquam erat volutpat. Mauris dignissim pellentesque pharetra. Curabitur euismod tincidunt pharetra. Donec rhoncus neque lectus, sit amet ultrices nunc posuere in. Duis luctus ut ex finibus gravida. Suspendisse a odio efficitur, dignissim elit a, ultricies sapien. In quam quam, condimentum nec neque ut, malesuada accumsan felis. Proin quis vestibulum risus. Sed lorem lectus, varius a arcu id, lobortis tristique ex. Nullam dapibus leo at risus suscipit volutpat.
<br>
Nunc viverra erat ut mauris bibendum, rutrum porttitor enim tempus. Quisque eu leo eu dolor tempus mattis eu in sapien. Ut ornare lacinia lacus, eget scelerisque neque interdum in. Nam non sodales diam. Integer eu ex cursus enim tempus scelerisque. Nam pellentesque consequat ligula vel euismod. Mauris leo lorem, auctor non mauris at, ornare sodales urna. Nulla ut enim dui. Aliquam id commodo sapien. Nam nec luctus lacus. Maecenas in vestibulum nisi, id scelerisque risus. Duis mattis quam non nisi gravida semper. Aliquam nec dolor eu enim pharetra gravida vel vehicula nulla.
<br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec auctor leo, vel accumsan ipsum. Etiam ipsum odio, fermentum sit amet odio vitae, sodales eleifend lorem. Integer malesuada felis eu pellentesque accumsan. Integer risus est, viverra eu tincidunt at, mattis ut tortor. Nunc bibendum diam id enim blandit, vitae blandit erat commodo. Fusce in urna augue. Sed vel nulla blandit, aliquam neque in, sollicitudin nibh. Proin erat lacus, scelerisque id nunc id, iaculis ultricies erat. Maecenas tempus commodo felis nec venenatis. Integer a eros aliquet, ullamcorper lacus eu, lobortis tortor.
`;

/*
SVG icons taken from the free icons website:
<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
*/

const calendarIcon = `
<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
<g>
    <rect x="22" y="43" width="7" height="7"/>
    <rect x="22" y="25" width="7" height="7"/>
    <rect x="22" y="34" width="7" height="7"/>
    <rect x="13" y="34" width="7" height="7"/>
    <rect x="13" y="25" width="7" height="7"/>
    <rect x="13" y="43" width="7" height="7"/>
    <rect x="40" y="25" width="7" height="7"/>
    <path d="M57,4h-7V1c0-0.553-0.447-1-1-1h-7c-0.553,0-1,0.447-1,1v3H19V1c0-0.553-0.447-1-1-1h-7c-0.553,0-1,0.447-1,1v3H3   C2.447,4,2,4.447,2,5v11v43c0,0.553,0.447,1,1,1h54c0.553,0,1-0.447,1-1V16V5C58,4.447,57.553,4,57,4z M49,32v2v7v2v9h-9h-2h-7h-2   h-7h-2h-9v-9v-2v-7v-2v-9h9h2h7h2h7h2h9V32z M56,15H4V6h6v3c0,0.553,0.447,1,1,1h7c0.553,0,1-0.447,1-1V6h22v3c0,0.553,0.447,1,1,1   h7c0.553,0,1-0.447,1-1V6h6V15z"/>
    <rect x="40" y="34" width="7" height="7"/>
    <rect x="40" y="43" width="7" height="7"/>
    <rect x="31" y="43" width="7" height="7"/>
    <rect x="31" y="34" width="7" height="7"/>
    <rect x="31" y="25" width="7" height="7"/>
</g>
</svg>
`;

const locationIcon = `
<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 54.757 54.757" style="enable-background:new 0 0 54.757 54.757;" xml:space="preserve">
<path d="M40.94,5.617C37.318,1.995,32.502,0,27.38,0c-5.123,0-9.938,1.995-13.56,5.617c-6.703,6.702-7.536,19.312-1.804,26.952  L27.38,54.757L42.721,32.6C48.476,24.929,47.643,12.319,40.94,5.617z M27.557,26c-3.859,0-7-3.141-7-7s3.141-7,7-7s7,3.141,7,7  S31.416,26,27.557,26z"/>
<g>
</svg>
`;

const closeIcon = `
<svg class="close-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 51.976 51.976" style="enable-background:new 0 0 51.976 51.976;" xml:space="preserve">
<g>
    <path d="M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0   C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778   c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828   c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828   l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z"/>
</g>
</svg>
`;

function createEventCard(event) {
    return `
        <div class="event-card 
        ${standOut(event.type) ? 'stand-out-card' : ''}
        ${isPremiumOnly(event.type) ? 'premium-card' : ''}">
            <div class="event-img">
                <img src="${event.imgUrl}">
            </div>
            <div class="event-description">
                <div class="event-info">
                    <p class="event-title">
                        ${event.title} 
                        <br>
                        <span class="event-premium">PREMIUM-ONLY</span>
                    </p>
                    <p class="event-dates">${event.eventDates}</p>
                    <p class="event-application-dates">
                    ${calendarIcon}
                    Application date: ${event.applicationDate}</p>
                    <p class="event-location">${locationIcon} ${event.location}</p>
                </div>
                <div class="cta-buttons">
                    <button onclick=displayModal('${event.id}')>See Details</button>
                    <button class="primary-button"
                    onclick="applyToEvent(
                    '${event.id}',
                    '${event.title}',
                    ${isPremiumOnly(event.type)})">
                    Apply</button>
                </div>
            </div>
        </div>
    `;
}

function createEventDetails(eventId) {
    const event = events.find(event => event.id === eventId);
    return `
    <div class="event-details
        ${isPremiumOnly(event.type) ? 'premium-details' : ''}"
        style="background-image: url(${event.imgUrl})">
            <div class="details-description">
                <div class="details-info">
                    <p class="details-title">
                        ${event.title} 
                        <br>
                        <span class="details-premium">PREMIUM-ONLY</span>
                    </p>
                    <p class="details-dates">${event.eventDates}</p>
                    <p>${calendarIcon} Application date: ${event.applicationDate}
                    ${locationIcon} ${event.location}</p>
                    <p class="general-description">${genericDescription}</p>
                </div>
                <div class="cta-buttons">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${window.location}?eventId=${eventId}" target="_blank">Share on Facebook</a>
                <button class="primary-button"
                    onclick="applyToEvent(
                    '${event.id}',
                    '${event.title}',
                    ${isPremiumOnly(event.type)})">
                    Apply</button>
                </div>
            </div>
        </div>
    `;
}

function standOut(type) {
    return Boolean(standOutEventTypes.find(standOutEvent => standOutEvent === type));
}

function isPremiumOnly(type) {
    return type === 'Premium-only Webinar';
}

const modal = document.getElementById('modal');
const modalBox = document.getElementById('modal-box');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close-modal');

closeModal.innerHTML = closeIcon;

function displayModal(eventId) {
    modal.classList.add('modal--display');
    modalContent.innerHTML = createEventDetails(eventId);
    modalBox.classList.add('modal-box--display');
    document.body.classList.add('disable-scroll');
}

function hideModal() {
    modal.classList.remove('modal--display');
    modalBox.classList.remove('modal-box--display');
    document.body.classList.remove('disable-scroll');

}

const alertMessage = document.getElementById('alert-message');
const alertMessageText = document.getElementById('alert-message-text');

function applyToEvent(eventId, eventTitle, isPremium) {
    alertMessage.classList.remove('alert-message--success', 'alert-message--error');
    const alreadyApplied = appliedEvents.find(id => eventId === id);
    console.log(alreadyApplied);
    if(isPremium) {
        alertMessageText.innerHTML =`
        <p>You can't apply to "${eventTitle}" since it's a Premium-only event.</p>
        <div class="cta-buttons--error">
            <button class="go-premium" onclick="goPremium()">Go Premium</button>
            <button onclick="hideAlertMessage()">Dismiss</button>
        </div>`;
        alertMessage.classList.add('alert-message--error', 'alert-message--display');
    } else if(alreadyApplied) {
        alertMessage.classList.add('alert-message--error', 'alert-message--display');
        alertMessageText.innerHTML =`
        <p>You have already applied to "${eventTitle}".
        Check all Your Events on the menu.</p>
        <div class="cta-buttons--error">
            <button onclick="hideAlertMessage()">Dismiss</button>
        </div>`;
    } else {
        appliedEvents.push(eventId);
        console.log(appliedEvents);
        registerAppliedEvents();
        alertMessageText.innerText =``;
        alertMessageText.innerHTML =`
        <p>You have applied successfully to "${eventTitle}"!
        Check all Your Events on the menu.</p>
        <div class="cta-buttons--success">
            <button onclick="hideAlertMessage()">Dismiss</button>
        </div>`;
        alertMessage.classList.add('alert-message--success', 'alert-message--display');
    }
}

function registerAppliedEvents() {
    const yourEventsList = document.getElementById('your-events-list');
    const listContent = appliedEvents.map(eventId => {
        const event = events.find(event => eventId === event.id);
        return `
        <li>
        <a class="applied-event"
            onclick="displayAppliedEventModal('${eventId}')">
            <div class="applied-img">
                <img src="${event.imgUrl}">
            </div>
            <div class="applied-title">
                <p>${event.title}</p>
            </div>
            <span class="overflow-mist"></span>
        </a>
        </li>`;
    }).reduce((prev, curr) => {
        return prev + curr;
    });
    console.log('listContent', listContent);
    yourEventsList.innerHTML = listContent;
}

function displayAppliedEventModal(eventId) {
    toggleNavDisplay();
    displayModal(eventId);
}

function goPremium() {
    window.open('https://vanhack.com/premium', '_blank');
    hideAlertMessage();
}

function hideAlertMessage() {
    alertMessageText.innerHTML = '';
    alertMessage.classList.remove(
        'alert-message--success',
        'alert-message--error',
        'alert-message--display'
    );
}

let navToggle = false;
const toggleIcon = document.getElementById('icon');
const sideMenu = document.getElementById('side-menu');

function toggleNavDisplay() {
    if(navToggle) {
        document.body.classList.remove('disable-scroll');
        toggleIcon.classList.remove('icon--cross');
        sideMenu.classList.remove('side-menu--displayed');
    } else {
        document.body.classList.add('disable-scroll');
        toggleIcon.classList.add('icon--cross');
        sideMenu.classList.add('side-menu--displayed');
    }

    navToggle = !navToggle;
}

let featuredEvents = '';

events.forEach(event => {
    featuredEvents += createEventCard(event);
});

document.getElementById('featured-events').innerHTML = featuredEvents;

(function getUrlParams() {
    let urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('eventId');
    if(eventId) {
        displayModal(eventId);
    }
})();