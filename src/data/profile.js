// LinkedIn-sourced profile data. Fill from a LinkedIn "Save to PDF" export
// (see the portfolio-sync skill). Never invent values: leave a list empty and
// the section that uses it stays hidden.

export const profile = {
  linkedinUrl: "https://www.linkedin.com/in/rithvikpanchumarthi/",
  asOf: null, // "YYYY-MM-DD" of the export used

  // { role, company, start, end, location, highlights: [] }  (end: null = present)
  experience: [],

  // { school, degree, start, end }
  education: [],

  // { name, issuer, date }
  certifications: []
};
