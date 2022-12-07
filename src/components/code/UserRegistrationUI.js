import React from 'react';
import "./userRegistrationStyle.css"
export default function UserRegistration() {
  return (
    <>
      <div class="topnav">
        <a href="https://herovired.com/">Hero Vired</a>
        <a href="#dashboardPage">Dashboard</a>

        <div class="topnav-right">
          <a href="./userRegistrationUI.html">Add New User</a>
          <a href="#profilePage">Profile</a>
          <a href="#otherPage">Menu</a>
          <a href="#logout">Log out</a>
        </div>
      </div>

      <div class="mainForm">
        <div class="container">
          <div class="title">New User Registration</div>
          <div class="content">
            <form action="#">
              <div class="user-details">
                <div class="input-box">
                  <span class="details">Full Name</span>
                  <input type="text" placeholder="Enter the name of new User" required>
                </div>
                <div class="input-box">
                  <span class="details">Username</span>
                  <input type="text" placeholder="Enter username" required>
                </div>
                <div class="input-box">
                  <span class="details">Email</span>
                  <input type="text" placeholder="Enter email" required>
                </div>
                <div class="input-box">
                  <span class="details">Temp Password</span>
                  <input type="text" placeholder="Enter temporary password" required>
                </div>
                <div class="input-box">
                  <span class="details">Phone Number</span>
                  <input type="text" placeholder="Enter your number" required>
                </div>
                <div class="input-box">
                  <span class="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, optio odit
                    consectetur tempore laudantium quibusdam nemo quam eos accusamus...</span>

                </div>
              </div>
              <div class="emp-details">
                <input type="radio" name="emp" id="dot-1" checked />
                <input type="radio" name="emp" id="dot-2" />
                <input type="radio" name="emp" id="dot-3" />
                <span class="gender-title">Select the User type:</span>
                <div class="category">
                  <label for="dot-1">
                    <span class="dot one"></span>
                    <span class="gender">Career Services</span>
                  </label>
                  <label for="dot-2">
                    <span class="dot two"></span>
                    <span class="gender">Faculty</span>
                  </label>
                  <label for="dot-3">
                    <span class="dot three"></span>
                    <span class="gender">Admin</span>
                  </label>
                </div>
              </div>
              <div class="button">
                <input type="submit" value="Register User" />
              </div>
            </form>
          </div>
        </div>
      </div>





    </>
  )
}


