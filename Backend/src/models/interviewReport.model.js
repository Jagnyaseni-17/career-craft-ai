const mongoose = require('mongoose');

/**
 * -job description schema:String
 * -resume text:String
 * -self description:String
 * 
 * matchScore : Number
 * 
 * >Technical questions:
 *              [{
 *                  question:"",
 *                  intension:"",
 *                  answer:""
 *              }]
 * >Behavioural questions:
 *              [{
 *                  question:"",
 *                  intension:"",
 *                  answer:""
 *              }]
 * >Skill gaps:
 *              [{
 *                  skill:"",
 *                  severity:{
 *                      type:String,
 *                      enum:["low","medium","high"]
 *                  }
 *              }]
 * >Preparation plan:
 *              [{
 *                  day:Number,
 *                  focus:String,
 *                  tasks:[String]
 *              }]
 */

const interviewReportSchema = new mongoose.Schema({})