import { useState } from "react";
import { Calculator as CalculatorIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Calculator = () => {
  const [propertyPrice, setPropertyPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMortgage = () => {
    const price = parseFloat(propertyPrice.replace(/,/g, ""));
    const down = parseFloat(downPayment.replace(/,/g, ""));
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseFloat(loanTerm) * 12;

    if (price && down && rate && term) {
      const loanAmount = price - down;
      const payment = (loanAmount * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
      setMonthlyPayment(payment);
    }
  };

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="luxury" className="fixed bottom-20 right-4 z-50 rounded-full w-14 h-14 p-0 shadow-lg">
          <CalculatorIcon className="w-6 h-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Mortgage Calculator</DialogTitle>
        </DialogHeader>
        <Card className="bg-transparent border-none shadow-none">
          <CardContent className="space-y-4 p-0">
            <div className="space-y-2">
              <Label htmlFor="propertyPrice" className="text-foreground">Property Price (KES)</Label>
              <Input
                id="propertyPrice"
                placeholder="e.g., 50,000,000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(formatCurrency(e.target.value))}
                className="bg-input border-border text-foreground"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="downPayment" className="text-foreground">Down Payment (KES)</Label>
              <Input
                id="downPayment"
                placeholder="e.g., 10,000,000"
                value={downPayment}
                onChange={(e) => setDownPayment(formatCurrency(e.target.value))}
                className="bg-input border-border text-foreground"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="interestRate" className="text-foreground">Interest Rate (%)</Label>
              <Input
                id="interestRate"
                placeholder="e.g., 12.5"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                type="number"
                step="0.1"
                className="bg-input border-border text-foreground"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="loanTerm" className="text-foreground">Loan Term (Years)</Label>
              <Input
                id="loanTerm"
                placeholder="e.g., 20"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                type="number"
                className="bg-input border-border text-foreground"
              />
            </div>
            
            <Button onClick={calculateMortgage} className="w-full" variant="luxury">
              Calculate
            </Button>
            
            {monthlyPayment > 0 && (
              <div className="mt-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <h3 className="font-semibold text-accent mb-2">Monthly Payment</h3>
                <p className="text-2xl font-bold text-accent">
                  KES {monthlyPayment.toLocaleString("en-KE", { maximumFractionDigits: 0 })}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default Calculator;