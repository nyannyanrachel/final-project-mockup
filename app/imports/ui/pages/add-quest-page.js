import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

/* eslint-disable object-shorthand, no-unused-vars */

Template.Add_Quest_Page.onCreated(function onCreated() {
  console.log("This is the add contacts page...");
});