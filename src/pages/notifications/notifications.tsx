import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import { Loader, Layout, Button } from '../../components';
import { NOTIFICATION_FILTERS, NotificationFilter } from './types';
import { formatLongDate, getMockNotifications } from '../../utils';

export const Notifications: React.FC = () => {
  const { formatMessage } = useIntl();
  const [filter, setFilter] = useState<NotificationFilter>(NOTIFICATION_FILTERS.ALL);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const mockNotifications = getMockNotifications(formatMessage);

  const intl = {
    title: formatMessage({ id: 'notifications.title' }),
    subtitle: formatMessage({ id: 'notifications.subtitle' }),
    loading: formatMessage({ id: 'notifications.loading' }),
    all: formatMessage({ id: 'notifications.filterAll' }),
    unread: formatMessage({ id: 'notifications.filterUnread' }),
    read: formatMessage({ id: 'notifications.filterRead' }),
    empty: formatMessage({ id: 'notifications.empty' }),
    markAllRead: formatMessage({ id: 'notifications.markAllRead' })
  };

  const filterFunctions: Record<NotificationFilter, (notif: { read: boolean }) => boolean> = {
    [NOTIFICATION_FILTERS.ALL]: () => true,
    [NOTIFICATION_FILTERS.UNREAD]: (notif) => !notif.read,
    [NOTIFICATION_FILTERS.READ]: (notif) => notif.read
  };

  const filteredNotifications = mockNotifications.filter(filterFunctions[filter]);

  const unreadCount = mockNotifications.filter(n => !n.read).length;
  const hasUnreadNotifications = unreadCount > 0;
  const isEmpty = filteredNotifications.length === 0;

  const allFilterClassName = classNames('notifications-page__filter', {
    'notifications-page__filter--active': filter === NOTIFICATION_FILTERS.ALL
  });

  const unreadFilterClassName = classNames('notifications-page__filter', {
    'notifications-page__filter--active': filter === NOTIFICATION_FILTERS.UNREAD
  });

  const readFilterClassName = classNames('notifications-page__filter', {
    'notifications-page__filter--active': filter === NOTIFICATION_FILTERS.READ
  });

  if (loading) {
    return <Loader message={intl.loading} />;
  }

  const renderContent = () => {
    if (isEmpty) {
      return (
        <div className="notifications-page__empty">
          <p>{intl.empty}</p>
        </div>
      );
    }

    return filteredNotifications.map(notification => {
      const notificationItemClassName = classNames('notifications-page__item', {
        'notifications-page__item--unread': !notification.read
      });

      return (
        <div
          key={notification.id}
          className={notificationItemClassName}
        >
          <div className="notifications-page__item-icon">{notification.icon}</div>
          <div className="notifications-page__item-content">
            <h3 className="notifications-page__item-title">{notification.title}</h3>
            <p className="notifications-page__item-message">{notification.message}</p>
            <span className="notifications-page__item-date">
              {formatLongDate(notification.date)}
            </span>
          </div>
          {!notification.read && (
            <div className="notifications-page__item-dot"></div>
          )}
        </div>
      );
    });
  };

  return (
    <Layout
      className="notifications-page"
      title={intl.title}
      subtitle={intl.subtitle}
      headerActions={
        hasUnreadNotifications && (
          <Button className="notifications-page__mark-all">
            {intl.markAllRead}
          </Button>
        )
      }
    >

        <div className="notifications-page__filters">
          <Button
            className={allFilterClassName}
            onClick={() => setFilter(NOTIFICATION_FILTERS.ALL)}
          >
            {intl.all}
            {filter === NOTIFICATION_FILTERS.ALL && <span className="notifications-page__count">({mockNotifications.length})</span>}
          </Button>
          <Button
            className={unreadFilterClassName}
            onClick={() => setFilter(NOTIFICATION_FILTERS.UNREAD)}
          >
            {intl.unread}
            {hasUnreadNotifications && <span className="notifications-page__badge">{unreadCount}</span>}
          </Button>
          <Button
            className={readFilterClassName}
            onClick={() => setFilter(NOTIFICATION_FILTERS.READ)}
          >
            {intl.read}
          </Button>
        </div>

        <div className="notifications-page__list">
          {renderContent()}
        </div>
    </Layout>
  );
};

