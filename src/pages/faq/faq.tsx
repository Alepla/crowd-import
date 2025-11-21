import { useIntl } from 'react-intl';
import classNames from 'classnames';
import { Layout, Button } from '../../components';
import { faqItemsData } from './faq-data';
import { useFAQ } from './hooks/use-faq';
import { renderChevronDownIcon } from '../../resources/icons';

export const FAQ: React.FC = () => {
  const { formatMessage } = useIntl();
  const { toggleItem, isItemOpen } = useFAQ();

  const intl = {
    title: formatMessage({ id: 'faq.title' }),
    subtitle: formatMessage({ id: 'faq.subtitle' }),
    faqItems: faqItemsData.map(item => ({
      id: item.id,
      question: formatMessage({ id: item.questionKey }),
      answer: formatMessage({ id: item.answerKey })
    }))
  };

  return (
    <Layout
      className="faq-page"
      title={intl.title}
      subtitle={intl.subtitle}
    >
      <div className="faq-page__list">
          {intl.faqItems.map(item => {
            const isOpen = isItemOpen(item.id);
            const itemClassName = classNames('faq-page__item', {
              'faq-page__item--open': isOpen
            });
            const iconClassName = classNames('faq-page__icon', {
              'faq-page__icon--open': isOpen
            });
            return (
              <div key={item.id} className={itemClassName}>
                <Button
                  className="faq-page__question"
                  onClick={() => toggleItem(item.id)}
                  ariaExpanded={isOpen}
                >
                  <span className="faq-page__question-text">{item.question}</span>
                  <span className={iconClassName}>
                    {renderChevronDownIcon()}
                  </span>
                </Button>
                {isOpen && (
                  <div className="faq-page__answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
    </Layout>
  );
};

