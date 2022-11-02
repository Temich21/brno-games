'use strict';

/**
 * dnd-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dnd-game.dnd-game');
