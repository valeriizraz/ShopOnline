const createTag = (selector, className, text) => {
  const tag = document.createElement(selector);
  tag.className = className;
  tag.textContent = text;

  return tag;
};

export const createElementsTimer = () => {
  const banerTimer = document.querySelector('.baner__timer');

  const banerTimerContainer = createTag('div', 'baner__timer-container');

  const banerItemDays = createTag(
      'p', 'baner__timer-item baner__timer-item-days');
  const banerCountDays = createTag(
      'span', 'baner__count baner__count-days');
  const banerUnitsDays = createTag(
      'span', 'baner__units baner__units-days', 'дня');
  banerItemDays.append(banerCountDays, banerUnitsDays);

  const banerItemHours = createTag(
      'p', 'baner__timer-item baner__timer-item-hours');
  const banerCountHours = createTag(
      'span', 'baner__count baner__count-hours');
  const banerUnitsHours = createTag(
      'span', 'baner__units baner__units-hours', 'часов');
  banerItemHours.append(banerCountHours, banerUnitsHours);

  const banerItemMinutes = createTag(
      'p', 'baner__timer-item baner__timer-item-minutes');
  const banerCountMinutes = createTag(
      'span', 'baner__count baner__count-minutes');
  const banerUnitsMinutes = createTag(
      'span', 'baner__units baner__units-minutes', 'минут');
  banerItemMinutes.append(banerCountMinutes, banerUnitsMinutes);

  const banerItemSeconds = createTag(
      'p', 'baner__timer-item baner__timer-item-seconds');
  const banerCountSeconds = createTag(
      'span', 'baner__count baner__count-seconds');
  const banerUnitsSeconds = createTag(
      'span', 'baner__units baner__units-seconds', 'секунд');
  banerItemSeconds.append(banerCountSeconds, banerUnitsSeconds);

  banerTimerContainer.append(
      banerItemDays,
      banerItemHours,
      banerItemMinutes,
      banerItemSeconds,
  );
  banerTimer.append(banerTimerContainer);
};

