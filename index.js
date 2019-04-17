module.exports = function pubg_remover(mod) {
    mod.hook('S_SPAWN_NPC', 11, p =>{
        if(p.huntingZoneId == 183 && (p.templateId == 6005 || p.templateId == 6006)) return false;
    });
}