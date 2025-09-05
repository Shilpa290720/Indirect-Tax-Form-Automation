// Minimal tax calculation (embed in PDF field calculate event)
var base = +this.getField("BaseAmount").value || 0;
var rate = +this.getField("GSTPercent").value || 0;
var gst = (base * rate) / 100;
this.getField("GSTAmount").value = gst.toFixed(2);
this.getField("TotalAmount").value = (base + gst).toFixed(2);
