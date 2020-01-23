import { Injectable } from '@angular/core';

@Injectable()
export class QuickIndicationQuestionService {

  getQuestions() {

    // Tooling generated configuration
    let questions: any[] = [
      {
        controlType: 'dropdown',
        key: 'limit',
        label: 'Limit Request',
        options: [
          { value: '1000000', description: '$1,000,000' },
          { value: '2000000', description: '$2,000,000' },
          { value: '3000000', description: '$3,000,000' },
          { value: '4000000', description: '$4,000,000' },
          { value: '5000000', description: '$5,000,000' },
          { value: '6000000', description: '$6,000,000' },
          { value: '7000000', description: '$7,000,000' },
          { value: '8000000', description: '$8,000,000' },
          { value: '9000000', description: '$9,000,000' },
          { value: '10000000',description: '$10,000,000' }
        ],
        required: true,
        value: '1000000',
        order: 1
      },
      {
        controlType: 'list',
        key: 'classCodes',
        label: 'Class Codes',
        required: true,
        questions: [
          {
            controlType: 'textbox',
            key: 'isoCode',
            type: 'text',
            label: 'Search Value',
            required: true
          },
          {
            controlType: 'textbox',
            key: 'exposureAmount',
            type: 'number',
            label: 'Exposure Amount',
            required: true
          }
        ],
        value: [
          {
            isoCode: "11167",
            exposureAmount: 100
          }
        ],
        order: 2
      },
      {
        controlType: 'checkbox',
        key: 'underlyingExposures',
        label: 'Underlying Exposures (check all that applies)',
        questions: [
          { key: 'automobileLiability', label: 'Automobile Liability'},
          { key: 'employersLiability', label: 'Employers Liability' },
          { key: 'miscellaneousProfessionalLiability', label: 'Miscellaneous Professional Liability' },
          { key: 'automobileLiabilityHiredNonOwned', label: 'Hired and Non Owned' },
          { key: 'generalLiability', label: 'General Liability' },
          { key: 'liquorLiability', label: 'Liquor Liability' },
          { key: 'employeeBenefit', label: 'Employee Benefit Liability' },
          { key: 'condoOrHoaDirectorsAndOfficers', label: 'Condo or HOA D&O' },
          { key: 'garageLiability', label: 'Garage Liability' },
          { key: 'includeOthers', label: 'Other (except for any umbrella/excess coverages)' }
        ],
        value: {
          automobileLiability: false,
          employersLiability: false,
          miscellaneousProfessionalLiability: false,
          automobileLiabilityHiredNonOwned: false,
          generalLiability: false,
          liquorLiability: false,
          employeeBenefit: false,
          condoOrHoaDirectorsAndOfficers: false,
          garageLiability: false,
          includeOthers: false
        },
        required: false,
        order: 3
      },
      {
        controlType: 'list',
        minLength: 1,
        maxLength: 10,
        key: 'umbrellaGeneralLiabilities',
        label: 'General Liability',
        questions: [
          {
            controlType: 'dropdown',
            key: 'occurrenceLimit',
            label: 'Limit of Liability per Occurrence (Minimum $1,000,000)',
            options: [
              { value: 1000000, description: '$1,000,000' },
              { value: 2000000, description: '$2,000,000' },
              { value: 3000000, description: '$3,000,000' },
              { value: 4000000, description: '$4,000,000' },
              { value: 5000000, description: '$5,000,000' }
            ],
            value: 1000000
          },
          {
            controlType: 'dropdown',
            key: 'aggregateLimit',
            label: 'Limit of Liability Aggregate (Minimum $2,000,000)',
            options: [
              { value: '1000000', description: '$1,000,000' },
              { value: '2000000', description: '$2,000,000' },
              { value: '3000000', description: '$3,000,000' },
              { value: '4000000', description: '$4,000,000' },
              { value: '5000000', description: '$5,000,000' }
            ],
            value: '2000000'
          },
          {
            controlType: 'dropdown',
            key: 'productsAggregateLimit',
            label: 'Limit of Liability Products Completed Operations Aggregate (Minimum $1,000,000)',
            options: [
              { value: 'IncludedInGL', description: 'Included in GL' },
              { value: 'Excluded', description: 'Excluded' },
              { value: '1000000', description: '$1,000,000' },
              { value: '2000000', description: '$2,000,000' },
              { value: '3000000', description: '$3,000,000' },
              { value: '4000000', description: '$4,000,000' },
              { value: '5000000', description: '$5,000,000' },
              { value: '6000000', description: '$6,000,000' },
              { value: '7000000', description: '$7,000,000' },
              { value: '8000000', description: '$8,000,000' },
              { value: '9000000', description: '$9,000,000' },
              { value: '10000000',description: '$10,000,000' }
            ],
          },
          {
            controlType: 'radio',
            key: 'anyProjectsPerLocation',
            label: 'Are There Any per Project or per Location General Aggregate Limits?',
            options: [
              { value: true, description: 'Yes' },
              { value: false, description: 'No' }
            ]
          },
          {
            controlType: 'textbox',
            key: 'underlyingPremium',
            label: 'Underlying Premium',
            required: false,
            type: 'number',
          }
        ],
        required: true,
        value: [
          {
            occurrenceLimit: '1000000',
            aggregateLimit: '2000000',
            productsAggregateLimit: '1000000',
            anyProjectsPerLocation: null,
            underlyingPremium: 0
          }
        ],
        order: 4
      }
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
