// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require_tree .
//= require jquery


$( document ).ready(function() {
  var $signupModal = $('#signupModal');
  var $loginModal = $('#loginModal')

  const setupClose = function() {
    $("#close-btn-1").click(function(){
      $loginModal.css('display','none');
      $signupModal.css('display','none');
    })
    $("#close-btn-2").click(function(){
      $loginModal.css('display','none');
      $signupModal.css('display','none');
    })
    $('#loginBtn').click(function() {
      setupLogin();
    })
    $('#signupBtn').click(function() {
      setupSignup();
    })
  }

  const setupSignup = function() {
    $signupModal.css('display','block');
    setupClose();
    $('#login-2').click(function() {
      $signupModal.css('display','none');
      setupLogin();
    })
  }

  const setupLogin = function(){
    $loginModal.css('display','block')
    setupClose();
    $('#signup-2').click(function() {
      $signupModal.css('display','none');
      setupSignup();
    })
  }

  setupClose();
  //
  //
  // const setUpLogin = function() {
  //   $('#loginBtn').click(function() {
  //     $loginModal.css("display","block");
  //     $("#close-btn").click(function() {
  //       $loginModal.css("display","none");
  //       setUpSignup();
  //       setUpLogin();
  //     })
  //     $('#signup-2').click(function() {
  //       $loginModal.css("display","none");
  //       $signupModal.css('display','block');
  //       setUpSignup();
  //       setUpLogin();
  //     })
  //   });
  // }
  //
  // const setUpSignup = function() {
  //   $('#signupBtn').click(function() {
  //     $loginModal.css('display','none');
  //     $signupModal.css("display","block");
  //     $("#close-btn").click(function() {
  //       $signupModal.css("display","none")
  //       setUpLogin();
  //       setUpSignup();
  //     })
  //     $('#login-2').click(function() {
  //       $signupModal.css("display","none");
  //       $loginModal.css('display','block');
  //       setUpLogin();
  //       setUpSignup();
  //     })
  //   })
})
