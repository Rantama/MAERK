'use strict';

import _ from 'lodash';
import Employee from './employee.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {

      res.status(404).json("The request was not found: 19 in employee.control---");
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send("The server has encountered an error: 29:employee.control---->", err.stack);
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}
// Get all employees
export function index(req, res) {
  return Employee.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// // Retrieve single employee
export function show(req, res) {
  return Employee.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates employee
export function create(req, res) {
  return Employee.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates employee
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Employee.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}
