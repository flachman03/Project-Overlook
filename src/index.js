import $ from 'jquery';
import './css/base.scss';
import Customer from './customer';
import domUpdates from './domupdates'

import './images/breakfast.svg'
import './images/specialist-user.svg'
import './images/open-book.svg'
import './images/home.svg'
import Data from './data';
import Room from './rooms';

let data;
const currentDate = new Date().toLocaleDateString('en-GB')
createDataSet()
/*--------------event listeners---------------*/
$('.nav-list__tab').click(function() {
  var tab_id = $(this).attr('data-tab');

  $('.nav-list__tab').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
})

$('.header__load-button').on('click', function() {
  $('.header__splash-page').fadeOut()
  let room = new Room(data.roomData)
  console.log(room)
  domUpdates.displayCurrentDate(currentDate)
  domUpdates.displayTodaysAvailableRooms(currentDate, data.bookingData, room)
})

function createDataSet() {
  data = new Data()
  fetchData('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices', 'serviceData')
  fetchData('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users', 'customerData')
  fetchData('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms', 'roomData')
  fetchData('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings', 'bookingData')
}

function fetchData(url, path) {
  fetch(url)
    .then(response => response.json())
    .then(myjson => data[path] = Object.values(myjson)[0])
    .catch(err => console.log(err))
}

setTimeout(() => console.log(data), 2000)






