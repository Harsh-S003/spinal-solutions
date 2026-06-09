import React, { useState } from 'react';
import { Upload, Send } from 'lucide-react';
import { toast } from 'sonner';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    country: 'United States',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    orderNotes: '',
  });

  const [files, setFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Order form submitted successfully.');
    // Handle submission logic here (e.g. API call, form processing)
  };

  return (
    <section className="w-full bg-[#f8fafc] py-16 font-sans text-[#1e293b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instructional Header Text */}
        <div className="text-center mb-12">
          <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Fill out the form below and use the <span className="font-semibold text-[#1e293b]">"Add Your Files"</span> button to upload the file. 
            Hit <span className="font-semibold text-[#1e293b]">"Submit"</span> to complete the upload.
          </p>
        </div>

        {/* Core Form Element */}
        <form onSubmit={handleSubmit} className="bg-white border border-slate-100 shadow-sm rounded-xl p-6 md:p-10 space-y-8">
          
          {/* Section: Name */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Name</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">First Name <span className="text-slate-400 font-normal">(required)</span></label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full bg-[#f8fafc] border border-slate-200 focus:border-[#00a3e0] focus:bg-white rounded-md px-4 py-3 text-sm transition-all duration-200 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Last Name <span className="text-slate-400 font-normal">(required)</span></label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full bg-[#f8fafc] border border-slate-200 focus:border-[#00a3e0] focus:bg-white rounded-md px-4 py-3 text-sm transition-all duration-200 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Section: Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email <span className="text-slate-400 font-normal">(required)</span></label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-[#f8fafc] border border-slate-200 focus:border-[#00a3e0] focus:bg-white rounded-md px-4 py-3 text-sm transition-all duration-200 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Phone <span className="text-slate-400 font-normal">(required)</span></label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-[#f8fafc] border border-slate-200 focus:border-[#00a3e0] focus:bg-white rounded-md px-4 py-3 text-sm transition-all duration-200 outline-none"
              />
            </div>
          </div>

          {/* Section: Company Info */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Company Name <span className="text-slate-400 font-normal">(required)</span></label>
            <input
              type="text"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full bg-[#f8fafc] border border-slate-200 focus:border-[#00a3e0] focus:bg-white rounded-md px-4 py-3 text-sm transition-all duration-200 outline-none"
            />
          </div>

          {/* Section: Address Fields */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">Address</h3>
            
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full bg-[#f8fafc] border border-slate-200 focus:border-[#00a3e0] focus:bg-white rounded-md px-4 py-3 text-sm transition-all duration-200 outline-none appearance-none cursor-pointer"
              >
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Address Line 1 <span className="text-slate-400 font-normal">(required)</span></label>
              <input
                type="text"
                name="addressLine1"
                required
                value={formData.addressLine1}
                onChange={handleInputChange}
                className="w-full bg-[#f8fafc] border border-slate-200 focus:border-[#00a3e0] focus:bg-white rounded-md px-4 py-3 text-sm transition-all duration-200 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Address Line 2</label>
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleInputChange}
                className="w-full bg-[#f8fafc] border border-slate-200 focus:border-[#00a3e0] focus:bg-white rounded-md px-4 py-3 text-sm transition-all duration-200 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">City <span className="text-slate-400 font-normal">(required)</span></label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full bg-[#f8fafc] border border-slate-200 focus:border-[#00a3e0] focus:bg-white rounded-md px-4 py-3 text-sm transition-all duration-200 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">State <span className="text-slate-400 font-normal">(required)</span></label>
                <input
                  type="text"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full bg-[#f8fafc] border border-slate-200 focus:border-[#00a3e0] focus:bg-white rounded-md px-4 py-3 text-sm transition-all duration-200 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">ZIP Code <span className="text-slate-400 font-normal">(required)</span></label>
                <input
                  type="text"
                  name="zipCode"
                  required
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full bg-[#f8fafc] border border-slate-200 focus:border-[#00a3e0] focus:bg-white rounded-md px-4 py-3 text-sm transition-all duration-200 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Section: Notes */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Order Notes <span className="text-slate-400 font-normal">(required)</span></label>
            <textarea
              name="orderNotes"
              required
              rows={4}
              value={formData.orderNotes}
              onChange={handleInputChange}
              className="w-full bg-[#f8fafc] border border-slate-200 focus:border-[#00a3e0] focus:bg-white rounded-md px-4 py-3 text-sm transition-all duration-200 outline-none resize-none"
            />
          </div>

          {/* Section: File Upload and Submission Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-slate-100 gap-4">
            
            {/* File Upload Field Wrapper */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2">Upload Order Form</label>
              <label className="inline-flex items-center space-x-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold px-5 py-2.5 rounded text-sm transition-all duration-150 cursor-pointer shadow-sm">
                <Upload className="w-4 h-4" />
                <span>Add your Files</span>
                <input 
                  type="file" 
                  multiple 
                  onChange={handleFileChange} 
                  className="hidden" 
                />
              </label>
              {files.length > 0 && (
                <span className="block text-xs text-slate-500 mt-2 font-medium">
                  {files.length} file(s) attached
                </span>
              )}
            </div>

            {/* Action Submit Button */}
            <button
              type="submit"
              className="inline-flex items-center justify-center space-x-2 bg-[#00a3e0] hover:bg-[#008cc1] text-white font-bold px-8 py-3 rounded shadow-md shadow-black/5 transition-all duration-200 cursor-pointer self-stretch sm:self-end"
            >
              <Send className="w-4 h-4" />
              <span>Send</span>
            </button>

          </div>

        </form>
      </div>
    </section>
  );
};

export default Form;