"use strict";

var gulp = require('gulp'),
    boilerplate = require('appium-gulp-plugins').boilerplate.use(gulp);

boilerplate({buildName: 'appium-fake-driver', testTimeout: 15000, watchE2E: true});
